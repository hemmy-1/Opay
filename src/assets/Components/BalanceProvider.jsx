import React, { createContext, useState, useContext } from 'react';

// Create Context
const BalanceContext = createContext();

// Create Provider Component
export const BalanceProvider = ({ children }) => {
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const [balance, setBalance] = useState('150,000.00'); // Set your default initial balance

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible((prev) => !prev);
    };

    return (
        <BalanceContext.Provider
            value={{
                isBalanceVisible,
                setIsBalanceVisible,
                toggleBalanceVisibility,
                balance,
                setBalance,
            }}
        >
            {children}
        </BalanceContext.Provider>
    );
};

// Custom Hook for easy usage
export const useBalance = () => {
    const context = useContext(BalanceContext);
    if (!context) {
        throw new Error('useBalance must be used within a BalanceProvider');
    }
    return context;
};