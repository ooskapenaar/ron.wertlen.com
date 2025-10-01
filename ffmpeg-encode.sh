#!/bin/bash 
# converts given -i <filename> mp4 into HLS format.  
 
ffmpeg -i cv-presentation.mp4 -profile:v baseline -level 3.0 -s 720x404 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls career-journey.m3u8 
