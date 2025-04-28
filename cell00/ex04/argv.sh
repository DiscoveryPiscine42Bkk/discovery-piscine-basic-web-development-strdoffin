cnt=1
if [ "$#" -eq 0 ];
then
    echo "No arguments supplied"
else
	for i in $@
	do
		if [ $cnt -gt 3 ];
		then
			exit
		fi
		cnt=$((cnt+1))
    		echo "$i"
    	done
fi
