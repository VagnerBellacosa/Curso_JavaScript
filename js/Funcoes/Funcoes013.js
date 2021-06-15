function foo(i) {
   if (i < 0)
      return;
   document.writeln('begin:' + i);
   foo(i - 1);
   document.writeln('end:' + i);
}
foo(3);