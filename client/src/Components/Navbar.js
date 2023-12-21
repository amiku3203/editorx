import React from 'react';
import Select from 'react-select';
import '../Styles/Navbar.css';

const Navbar = ({ userLang, setUserLang, userTheme, setUserTheme, fontSize, setFontSize }) => {
  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];
  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: 4,
      // Adjust colors as needed
      borderColor: 'black',
      backgroundColor: 'white'
	  
    }),
    option: (provided) => ({
      ...provided,
      // Adjust option styles as needed
      backgroundColor: 'white',
      color: 'blue',
       
    }),
    // Add more custom styles as required
  };

  return (
    <div className="navbar">
      <h1> FetchX</h1>
      <Select
        options={languages}
        styles={customStyles} // Use styles instead of theme
        onChange={(e) => setUserLang(e.value)}
        placeholder={userLang}
      />
      <Select
        options={themes}
        onChange={(e) => setUserTheme(e.value)}
        placeholder={userTheme}
		styles={customStyles} 
      />
      <label>Font Size</label>
      <input
        type="range"
        min="18"
        max="30"
        value={fontSize}
        step="2"
        onChange={(e) => setFontSize(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
