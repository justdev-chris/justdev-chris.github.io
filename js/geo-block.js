// California Age Assurance Act (AB 1043) Compliance
// Geoblocks California users from accessing applications

(async function() {
  try {
    // Fetch user's IP geolocation data
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    // Check if user is in California
    if (data.region === 'California' || data.region_code === 'CA') {
      // Create blocking overlay
      const overlay = document.createElement('div');
      overlay.id = 'ca-block-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999999;
        font-family: Arial, sans-serif;
      `;
      
      // Create message container
      const message = document.createElement('div');
      message.style.cssText = `
        background: #1a1a1a;
        border: 2px solid #ff6b6b;
        padding: 40px;
        border-radius: 10px;
        text-align: center;
        color: white;
        max-width: 500px;
      `;
      
      message.innerHTML = `
        <h1 style="color: #ff6b6b; margin-bottom: 20px;">Access Restricted</h1>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
          Due to California's Digital Age Assurance Act (AB 1043), 
          this application is not available to California residents.
        </p>
        <p style="font-size: 14px; color: #999; margin-bottom: 20px;">
          This restriction is effective January 1, 2027.
        </p>
        <p style="font-size: 12px; color: #666;">
          If you believe this is an error, please contact support.
        </p>
      `;
      
      overlay.appendChild(message);
      document.body.appendChild(overlay);
      
      // Disable all downloads and interactions
      document.body.style.overflow = 'hidden';
      
      // Prevent any download attempts
      document.querySelectorAll('a[href*="download"], button').forEach(el => {
        el.disabled = true;
        el.style.pointerEvents = 'none';
        el.style.opacity = '0.5';
      });
    }
  } catch (error) {
    // If geolocation fails, allow access (fail-open approach)
    console.log('Geolocation check failed, allowing access');
  }
})();