 // Function to customize the selected invoice template
 function customizeInvoice() {
    const template = document.getElementById('invoice-template').value;
    const customizedInvoice = document.getElementById('customized-invoice');
    
    customizedInvoice.innerHTML = ''; // Clear previous content
    
    switch (template) {
        case 'basic':
            customizedInvoice.innerHTML = `
                <h3>Basic Invoice Template</h3>
                <p>Customer Name: John Doe</p>
                <p>Invoice Date: 2024-09-27</p>
                <p>Total Amount Due: $500.00</p>
            `;
            break;
        case 'professional':
            customizedInvoice.innerHTML = `
                <h3>Professional Invoice Template</h3>
                <p>Customer Name: Jane Smith</p>
                <p>Invoice Date: 2024-09-27</p>
                <p>Service Provided: Web Development</p>
                <p>Total Amount Due: $1,500.00</p>
            `;
            break;
        case 'modern':
            customizedInvoice.innerHTML = `
                <h3>Modern Invoice Template</h3>
                <p>Customer Name: XYZ Corporation</p>
                <p>Invoice Date: 2024-09-27</p>
                <p>Total Amount Due: $3,000.00</p>
            `;
            break;
        default:
            customizedInvoice.innerHTML = 'Please select an invoice template.';
    }
}

// Function to simulate payment processing
function processPayment() {
    const paymentStatus = document.getElementById('payment-status');
    paymentStatus.innerHTML = 'Processing payment...';

    // Simulate a payment processing delay
    setTimeout(() => {
        paymentStatus.innerHTML = 'Payment processed successfully!';
    }, 2000);
}
