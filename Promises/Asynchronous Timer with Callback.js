function timer(duration, onComplete) {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, duration - elapsed);
      console.log(`Time remaining: ${remaining}ms`);
      
      if (remaining <= 0) {
        clearInterval(interval);
        onComplete(`Timer of ${duration} ms finished`);
      }
    }, 100);
  }
  
  
  timer(3000, (message) => {
    console.log(message);  
  });