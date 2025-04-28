echo $#
if [ "$#" -eq 0 ];
then
  echo "No arguments supplied"
else
  i=1
  while [$i -lt $#]
  do
    mkdir "ex$i"
  done
fi
