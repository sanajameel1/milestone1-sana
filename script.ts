// listing element
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    //Get refrences to form elements using their IDs

const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    //Type assertion
     const nameElement = document.getElementById('name') as HTMLInputElement;
     const emailElement = document.getElementById('email') as HTMLInputElement;
     const phoneElement = document.getElementById('phone') as HTMLInputElement;
     const educationElement = document.getElementById('education') as HTMLInputElement;
     const experienceElement = document.getElementById('experience') as HTMLInputElement;
     const skillsElement = document.getElementById('skills') as HTMLInputElement;

     // 
     const usernameElement = document.getElementById('username')as HTMLInputElement;

    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement){
        //******* */
        const name = nameElement.value ;
        const email = emailElement.value ;
        const phone = emailElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value ;

        const skills = skillsElement.value
        //******************* */

        //
        const username = usernameElement.value;
            //
              

        //picture elements
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL= profilePictureFile
        ?URL.createObjectURL(profilePictureFile) :'';
    
     //Generate resume output
     const resumeHTML = `
     <h2>Resume</h2>
     ${profilePictureURL ?`<img src="${profilePictureURL}" alt="Profile Picture "class="profilePicture">` : ''}
     
     <p><strong>Name:</strong> ${name} </p>
     <p><strong>Email:</strong> ${email} </p>
     <p><strong>Phone:</strong> ${phone} </p>

     <h3>Education</h3>
     <p>${education}</p>

     <h3>Experience</h3>
     <p>${experience}</p>

     <h3>Skills</h3>
     <p>${skills}</p>

     `;
     //*dispaly the resume in out put container


     const resumeOutputElement = document.getElementById('resumeOutput')
     if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeHTML;
        resumeOutputElement.classList.remove("hidden");

        // create container for buttons

        const buttonsContainer = document.createElement("div")
        buttonsContainer.id = "buttonsContainer";
        resumeOutputElement.appendChild(buttonsContainer)

        // add PDF button
        const downloadButton = document.createElement("button")
        downloadButton.textContent = "Download as PDF";
        downloadButton.addEventListener("click", () => {
            window.print(); // open the print dialog,allowing the user to saved as PDF
        });
        buttonsContainer.appendChild(downloadButton);

        // add shareable link button
        const shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "Copy Shareable Link";
        shareLinkButton.addEventListener("click", async () => {
            try {
                // create a unique shareable link (simulater in this case)
                const shareableLink = `https://yourdomain.com/resumes/${name.replace(
                    /\s+/g,
                    "_"
                )}_cv.html`;
                // use clipboard API to copy the shareable link
                await navigator.clipboard.writeText(shareableLink);
                alert("shareable link copy to clipboard! ");
            } catch (err) {
                console.error(" Failed to copy link", err);
                alert("Failed to copy link to clipboard.please try again");
                }
        });
        buttonsContainer.appendChild(shareLinkButton)
   
     
    } else {
        console.error('Resume output container not found')
    }
} else { console.error('Form elements are missing')
    
}
    });



    
