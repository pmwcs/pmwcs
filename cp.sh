

_cp () {
  for f in `ls ../../forks/rmwc/src/**/*.spec.tsx`
  do
    g=`echo $f | sed -e "s#../../forks/rmwc/##"`
    gb=${g%%.tsx}
    echo cp $f $gb.js
  done
}

_cp
