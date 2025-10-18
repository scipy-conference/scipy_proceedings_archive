for folder in $(ls | egrep -i '^[^\.]+$'); do
 echo submitting $folder
 cd $folder
 curvenote submit scipy -y
#  curvenote sub publish scipy
 cd ..
done