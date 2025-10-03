// Show/hide medication details based on selection (Updated for new form)
document.getElementById('medicationYes').addEventListener('change', function() {
    const medicationDetailsGroup = document.getElementById('medicationDetailsGroup');
    const medicationTextarea = document.getElementById('intlMedication');
    const medicalReport = document.getElementById('medicalReport');
    
    if (this.checked) {
        medicationDetailsGroup.style.display = 'block';
        medicationTextarea.setAttribute('required', 'true');
        medicalReport.setAttribute('required', 'true');
    } else {
        medicationDetailsGroup.style.display = 'none';
        medicationTextarea.removeAttribute('required');
        medicalReport.removeAttribute('required');
    }
});

document.getElementById('medicationNo').addEventListener('change', function() {
    const medicationDetailsGroup = document.getElementById('medicationDetailsGroup');
    const medicationTextarea = document.getElementById('intlMedication');
    const medicalReport = document.getElementById('medicalReport');
    
    medicationDetailsGroup.style.display = 'none';
    medicationTextarea.removeAttribute('required');
    medicalReport.removeAttribute('required');
});

// Initialize medication section on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for medication section
    const medicationYes = document.getElementById('medicationYes');
    const medicationDetailsGroup = document.getElementById('medicationDetailsGroup');
    const medicationTextarea = document.getElementById('intlMedication');
    const medicalReport = document.getElementById('medicalReport');
    
    if (medicationYes.checked) {
        medicationDetailsGroup.style.display = 'block';
        medicationTextarea.setAttribute('required', 'true');
        medicalReport.setAttribute('required', 'true');
    } else {
        medicationDetailsGroup.style.display = 'none';
        medicationTextarea.removeAttribute('required');
        medicalReport.removeAttribute('required');
    }
});

// International form submission (Updated for new form structure)
document.getElementById('internationalFormSubmit').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading indicator
    document.getElementById('internationalLoading').style.display = 'block';
    
    // Create a hidden iframe for form submission
    const iframe = document.createElement('iframe');
    iframe.name = 'formsubmit-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    // Change form target to the iframe
    this.target = 'formsubmit-iframe';
    
    // Add FormSubmit configuration as hidden fields
    const subjectInput = document.createElement('input');
    subjectInput.type = 'hidden';
    subjectInput.name = '_subject';
    subjectInput.value = 'International Visitor Registration - Questionnaire';
    this.appendChild(subjectInput);
    
    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = '_replyto';
    emailInput.value = document.getElementById('intlContact').value.includes('@') ? 
        document.getElementById('intlContact').value : 'jesussetm@gmail.com';
    this.appendChild(emailInput);
    
    const templateInput = document.createElement('input');
    templateInput.type = 'hidden';
    templateInput.name = '_template';
    templateInput.value = 'table';
    this.appendChild(templateInput);
    
    const captchaInput = document.createElement('input');
    captchaInput.type = 'hidden';
    captchaInput.name = '_captcha';
    captchaInput.value = 'false';
    this.appendChild(captchaInput);
    
    // Change form action to use FormSubmit
    this.action = 'https://formsubmit.co/jesussetm@gmail.com';
    
    // Submit the form to the iframe
    this.submit();
    
    // Hide the form and show success message after a delay
    setTimeout(function() {
        document.getElementById('internationalLoading').style.display = 'none';
        document.getElementById('internationalSuccess').style.display = 'block';
        document.getElementById('internationalFormSubmit').style.display = 'none';
        window.scrollTo({
            top: document.getElementById('internationalForm').offsetTop,
            behavior: 'smooth'
        });
    }, 2000);
});