const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'payroll_software',
    password: 'password',
    port: 5432,
});

// API for payroll processing
app.post('/api/payroll/:id/process', async (req, res) => {
    const employeeId = req.params.id;

    try {
        await pool.query('UPDATE payroll SET status = $1 WHERE employee_id = $2', ['Processed', employeeId]);
        res.status(200).json({ message: 'Payroll processed' });
    } catch (error) {
        res.status(500).json({ error: 'Error processing payroll' });
    }
});

// API for garnishment processing
app.post('/api/garnishment/:id/process', async (req, res) => {
    const employeeId = req.params.id;

    try {
        await pool.query('UPDATE garnishments SET status = $1 WHERE employee_id = $2', ['Processed', employeeId]);
        res.status(200).json({ message: 'Garnishment processed' });
    } catch (error) {
        res.status(500).json({ error: 'Error processing garnishment' });
    }
});

// API to generate reports
app.get('/api/reports', async (req, res) => {
    const reportType = req.query.type;

    try {
        const query = `SELECT * FROM ${reportType}_report`;  // A simplified example
        const result = await pool.query(query);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error generating report' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 33060');
});
