lftp -c "
  set sftp:auto-confirm yes
  open $LFTP_HOST_RW
  cd $LFTP_DIR_RW/
  ls
  mirror -R _site/ ./
  quit
 "
