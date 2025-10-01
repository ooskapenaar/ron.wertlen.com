module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("./src/css/");
  
  // Create blog posts collection using proper Eleventy collections
  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/posts/*.md")
      .sort((a, b) => {
        // Sort by date descending (newest first)
        return new Date(b.data.date) - new Date(a.data.date);
      });
  });
  
  // Add date filter for formatting dates
  eleventyConfig.addFilter("date", function(dateObj, format) {
    if (!dateObj) return '';
    const date = new Date(dateObj);
    
    if (format === "%B %d, %Y") {
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
    
    return date.toISOString().split('T')[0];
  });
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};