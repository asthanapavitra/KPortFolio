document.addEventListener("DOMContentLoaded", function() {
    // Typewriter effect
    const paragraphs = document.querySelectorAll(".typewriter");

    paragraphs.forEach((paragraph, index) => {
        const text = paragraph.getAttribute("data-text");
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                paragraph.innerHTML += text.charAt(i);
                i++;
                if(index==1) setTimeout(typeWriter, 5);
                else setTimeout(typeWriter, 15);
            } else if (index + 1 < paragraphs.length) {
                setTimeout(() => paragraphs[index + 1].classList.add("active"), 500);
            }
        }

        typeWriter();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".icon");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".popup-content .close");
    const platformLinksContainer = document.getElementById("platform-links");

    // Social media links with multiple IDs
    const links = {
        Instagram: ["http://www.instagram.com/star.phenom", "http://www.instagram.com/phenom.dulcet","http://www.instagram.com/phenom.global","http://www.instagram.com/phenomxindia"],
        GitHub: ["https://github.com/STARPHENOM"],
        LinkedIn: ["http://www.linkedin.com/in/starphenom"],
        LeetCode: ["https://leetcode.com/u/STARPHENOM/"],
        Twitter: ["https://x.com/phenomkanishk"],
        Telegram: ["https://t.me/starphenom1","https://t.me/star_phenom"],
        Discord: ["https://discord.gg/4txukxFV"],
        Services: ["www.google.com"]
    };

    icons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            const platform = icon.getAttribute("data-platform");
            platformLinksContainer.innerHTML = ""; // Clear previous links
    
            // Create and append link elements for each ID
            links[platform].forEach((url, index) => {
                // Create row container
                const row = document.createElement("div");
                row.classList.add("platform-row");
    
                // Create and append platform logo
                const logo = document.createElement("img");
                logo.src = icon.querySelector("img").src; // Use the same icon as in the main section
                logo.alt = `${platform} logo`;
                row.appendChild(logo);
                let username = extractUsernameFromURL(url);
                if(platform=="Discord"||platform=="Telegram"){
                    username="starphenom";
                }
                
                // Create and append link
                const linkElement = document.createElement("a");
                linkElement.href = url;
                linkElement.textContent = username;
                linkElement.target = "_blank";
                row.appendChild(linkElement);
    
                // Append the row to the container
                platformLinksContainer.appendChild(row);
            });
              // Get the position of the hovered icon
              const iconRect = icon.getBoundingClientRect();
              const popupX = iconRect.left + window.pageXOffset;
              const popupY = iconRect.top + window.pageYOffset - popup.offsetHeight;
  
              // Position the popup near the hovered icon
              popup.style.top = `${popupY}px`;
              popup.style.left = `${popupX}px`;
            
            // Show popup with animation
            popup.style.display = "flex";
            popup.classList.add("fade-in"); // Add animation class
            
            // Add blur effect to background
            document.querySelector(".header").classList.add("blur");
            document.querySelector(".social-icons").classList.add("blur");
            icon.addEventListener("mouseleave", (event) => {
                if (!popup.contains(event.relatedTarget)) {
                    popup.style.display = "none";
                    popup.classList.remove("move-to-center");
                    document.querySelector(".header").classList.remove("blur");
                    document.querySelector(".social-icons").classList.remove("blur");
                }
            });
        });
    });
    

    // Ensure popup doesn't close when hovered
    popup.addEventListener("mouseover", () => {
        popup.style.display = "flex";
    });

    popup.addEventListener("mouseleave", () => {
        popup.style.display = "none";
        
        document.querySelector(".header").classList.remove("blur");
        document.querySelector(".social-icons").classList.remove("blur");
    });
   

    // Function to extract the username from the URL
    function extractUsernameFromURL(url) {
        // Regex to capture the last part of the URL (after the last '/')
        const match = url.match(/\/([^\/]+)\/?$/);
        return match ? match[1] : "Unknown User";

    }
    
});
