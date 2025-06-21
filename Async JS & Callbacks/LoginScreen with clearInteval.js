let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Loading...!`);
  
  if (count >= 5) {
    clearInterval(intervalId);
    console.log('Loaded successfully!');
  }
}, 1000);