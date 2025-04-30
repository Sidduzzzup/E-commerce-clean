import React from 'react';

const FilterSidebar = ({ options, selectedOptions, onChange, onReset }) => {
  return (
    <aside style={{
      position: 'sticky',
      top: 32,
      alignSelf: 'flex-start',
      background: 'white',
      borderRadius: 18,
      boxShadow: '0 4px 24px rgba(60,72,100,0.10)',
      padding: '32px 28px 24px 28px',
      minWidth: 260,
      maxWidth: 320,
      marginBottom: 32,
      border: '1px solid #f0f0f0',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#222', margin: 0, letterSpacing: 0.2 }}>Filter by Brand</h3>
        {onReset && (
          <button
            onClick={onReset}
            style={{
              background: '#f5f6fa',
              border: 'none',
              borderRadius: 8,
              padding: '4px 12px',
              color: '#007bff',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.95rem',
              transition: 'background 0.2s',
            }}
          >
            Reset
          </button>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {options.map((option) => (
          <label key={option} style={{ display: 'flex', alignItems: 'center', fontSize: '1.05rem', color: '#333', cursor: 'pointer', fontWeight: 500 }}>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => onChange(option)}
              style={{
                marginRight: 12,
                accentColor: '#007bff',
                width: 18,
                height: 18,
                borderRadius: 6,
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                border: '1.5px solid #d0d0d0',
                transition: 'border 0.2s',
              }}
            />
            {option}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar; 