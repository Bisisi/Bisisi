

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg'); // PostgreSQL database for payroll data

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'payroll_system',
    password: 'password',
    port: 5432,
});

// API to fetch payroll data for an employee
app.get('/api/payroll/:id', async (req, res) => {
    const employeeId = req.params.id;

    try {
        const payrollResult = await pool.query('SELECT * FROM payroll WHERE employee_id = $1', [employeeId]);
        const benefitsResult = await pool.query('SELECT * FROM benefits WHERE employee_id = $1', [employeeId]);

        if (payrollResult.rows.length > 0 && benefitsResult.rows.length > 0) {
            res.status(200).json({
                payroll: payrollResult.rows[0],
                benefits: benefitsResult.rows[0]
            });
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

// API to process payroll
app.post('/api/payroll/:id/process', async (req, res) => {
    const employeeId = req.params.id;

    try {
        await pool.query('UPDATE payroll SET status = $1 WHERE employee_id = $2', ['Processed', employeeId]);
        res.status(200).json({ message: 'Payroll processed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing payroll' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
