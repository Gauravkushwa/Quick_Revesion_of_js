function fetchUserData(callback) {
    console.log("Fetching user data...");
    setTimeout(() => {
      const userData = "User data received";
      callback(userData);
    }, 1000);
  }
  
  function fetchUserPosts(callback) {
    console.log("Fetching user posts...");
    setTimeout(() => {
      const userPosts = "User posts received";
      callback(userPosts);
    }, 1500);
  }
  
  // Main execution
  fetchUserData(function(userData) {
    console.log(userData);
    
    fetchUserPosts(function(userPosts) {
      console.log(userPosts);
      console.log("All data loaded successfully!");
    });
  });