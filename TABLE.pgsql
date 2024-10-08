CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(100),
    salary DECIMAL,
    location VARCHAR(100),
    currency VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);

CREATE TABLE payroll (
    id SERIAL PRIMARY KEY,
    employee_id INTEGER REFERENCES employees(id),
    federal_taxes DECIMAL,
    state_taxes DECIMAL,
    garnishment DECIMAL,
    status VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE benefits (
    id SERIAL PRIMARY KEY,
    employee_id INTEGER REFERENCES employees(id),
    health_insurance BOOLEAN,
    employee_401k DECIMAL,
    employer_401k DECIMAL,
    pto_accrued DECIMAL,
    pto_used DECIMAL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
