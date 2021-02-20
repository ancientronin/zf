print(''.join( ['{}: {}\n'.format(i,'foobar' if i%15==0 else 'foo' if i%3==0 else 'bar' if i%5==0  else '') for i in range(1000)] ))

