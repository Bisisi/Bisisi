// Function to navigate to different pages
function navigateTo(page) {
    const pageContent = document.getElementById('page-content');

    switch (page) {
        case 'timeTracking':
            pageContent.innerHTML = `
                <h2>Time Tracking & Project Management</h2>
                <iframe src="time-tracking-project-management.html" style="width: 100%; height: 600px; border: none;"></iframe>
            `;
            break;
        case 'bank':
            pageContent.innerHTML = `
                        <h2>bank reconciliation</h2>
                        <iframe src="bank-reconciliation.html" style="width: 100%; height: 600px; border: none;"></iframe>
                    `;
            break;
        case 'metrics':
            pageContent.innerHTML = `
                <h2>Metrics, Insights & Balance Forecast</h2>
                <iframe src="metrics-insights-forecast.html" style="width: 100%; height: 600px; border: none;"></iframe>
            `;
            break;
        case 'invoicing':
            pageContent.innerHTML = `
                <h2>Invoicing & Payment Processing</h2>
                <iframe src="invoicing-payment-processing.html" style="width: 100%; height: 600px; border: none;"></iframe>
            `;
            break;
        case 'clientPortal':
            pageContent.innerHTML = `
                <h2>Client Portal</h2>
                <iframe src="client-portal.html" style="width: 100%; height: 600px; border: none;"></iframe>
            `;
            break;
        case 'inventory':
            pageContent.innerHTML = `
                <h2>Inventory Management</h2>
                <iframe src="inventory-management.html" style="width: 100%; height: 600px; border: none;"></iframe>
            `;
            break;
        case 'dashboard':
            pageContent.innerHTML = `
                <h2>Dashboard</h2>
                <p>Overview of your entire business performance and KPIs.</p>
                <iframe src="dashboard.html" style="width: 100%; height: 600px; border: none;"></iframe>
            `;
            break;
        case 'profile':
            pageContent.innerHTML = `
                <h2>Profile Page</h2>
                <iframe src="profile.html" style="width: 100%; height: 600px; border: none;"></iframe>
            `;
            break;
        default:
            pageContent.innerHTML = `
                <h2>Welcome to Your Dashboard</h2>
                <p>Select an option from the menu to access various tools and features of the platform.</p>
            `;
            break;
    }
}

