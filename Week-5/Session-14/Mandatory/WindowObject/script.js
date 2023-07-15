function displayWindowProperties()
 {
  console.log('User Agent:', window.navigator.userAgent);
  console.log('Screen Width:', window.screen.width);
  console.log('Screen Height:', window.screen.height);
  console.log('Current URL:', window.location.href);
  console.log('Current Path:', window.location.pathname);

  window.sessionStorage.setItem('sessionData', 'This is session data');
  console.log('Session Storage Data:', window.sessionStorage.getItem('sessionData'));

  window.localStorage.setItem('localData', 'This is local data');
  console.log('Local Storage Data:', window.localStorage.getItem('localData'));
  }

window.addEventListener('load', displayWindowProperties);
