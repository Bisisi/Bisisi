document.addEventListener('DOMContentLoaded', function() {
    const payrollButton = document.getElementById('run-payroll');
    const depositButton = document.getElementById('process-deposit');
    const garnishmentButton = document.getElementById('process-garnishment');
    const reportForm = document.getElementById('report-form');

    payrollButton.addEventListener('click', function() {
        alert('Payroll processed.');
        document.getElementById('payroll-status').innerText = 'Processed';
    });

    depositButton.addEventListener('click', function() {
        alert('Direct deposits processed.');
        document.getElementById('deposit-status').innerText = 'Completed';
    });

    garnishmentButton.addEventListener('click', function() {
        alert('Garnishments processed.');
        document.getElementById('garnishment-amount').innerText = '0.00';
    });

    reportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const reportType = document.getElementById('report-type').value;
        alert(`Generating ${reportType} report.`);
    });
});npm

