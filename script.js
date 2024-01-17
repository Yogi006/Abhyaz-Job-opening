document.addEventListener('DOMContentLoaded', function () {
    
    const jobData = [
        { title: 'Web Developer Intern', location: 'Abhyaz', description: 'Exciting opportunity for a web development intern.' },
        { title: 'Creative Graphics Designer Intern', location: 'Abhyaz', description: 'Exciting opportunity for a Creative Graphics Designer Intern.' }
    ];

    const jobListContainer = document.getElementById('jobList');
    const jobApplicationForm = document.getElementById('jobApplicationForm');
    const selectedJobDropdown = document.getElementById('selectedJob');
    jobData.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        jobCard.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Description:</strong> ${job.description}</p>
        `;

        jobListContainer.appendChild(jobCard);

        const jobOption = document.createElement('option');
        jobOption.value = job.title;
        jobOption.textContent = job.title;
        selectedJobDropdown.appendChild(jobOption);
    });

    jobApplicationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            const formData = new FormData(jobApplicationForm);
            const applicationData = {};
            formData.forEach((value, key) => {
                applicationData[key] = value;
            });

            alert(`Application submitted for ${applicationData.fullName} (${applicationData.email}) for the position of ${applicationData.selectedJob}`);
            
            jobApplicationForm.reset();
        }
    });

    
    function validateForm() {
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const selectedJob = document.getElementById('selectedJob').value;

        if (fullName === '' || email === '' || selectedJob === 'Select Job') {
            alert('Please fill in all fields');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email address');
            return false;
        }

        return true;
    }
});
