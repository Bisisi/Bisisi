// Invoice Generation
document.getElementById('invoice-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const client = document.getElementById('invoice-client').value;
    const description = document.getElementById('invoice-description').value;
    const amount = parseFloat(document.getElementById('invoice-amount').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value);
    const discount = parseFloat(document.getElementById('discount').value) || 0;
    
    // Calculate final amount
    const taxAmount = (amount * taxRate) / 100;
    const finalAmount = amount + taxAmount - discount;
    
    // Generate Invoice HTML
    const invoiceHtml = `
        <h3>Invoice</h3>
        <p><strong>Client:</strong> ${client}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Amount:</strong> $${amount.toFixed(2)}</p>
        <p><strong>Tax (${taxRate}%):</strong> $${taxAmount.toFixed(2)}</p>
        <p><strong>Discount:</strong> $${discount.toFixed(2)}</p>
        <p><strong>Total Amount Due:</strong> $${finalAmount.toFixed(2)}</p>
    `;

    document.getElementById('generated-invoice').innerHTML = invoiceHtml;
});

// Recurring Billing Setup
document.getElementById('billing-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const interval = document.getElementById('billing-interval').value;
    const startDate = document.getElementById('start-date').value;
    const notifyClient = document.getElementById('notify-client').checked;
    
    // Display billing schedule
    const billingHtml = `
        <h3>Recurring Billing Setup</h3>
        <p><strong>Billing Interval:</strong> ${interval}</p>
        <p><strong>Start Date:</strong> ${startDate}</p>
        <p><strong>Client Notification:</strong> ${notifyClient ? 'Yes' : 'No'}</p>
    `;
    
    document.getElementById('billing-schedule').innerHTML = billingHtml;
});

// Payment Processing
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const method = document.getElementById('payment-method').value;
    const currency = document.getElementById('currency').value;
    const amount = parseFloat(document.getElementById('payment-amount').value);
    
    // Simulate real-time transaction processing
    const processingHtml = `
        <h3>Payment Confirmation</h3>
        <p><strong>Method:</strong> ${method}</p>
        <p><strong>Currency:</strong> ${currency.toUpperCase()}</p>
        <p><strong>Amount Paid:</strong> $${amount.toFixed(2)}</p>
        <p>Payment was successful!</p>
    `;
    
    document.getElementById('payment-result').innerHTML = processingHtml;
});
