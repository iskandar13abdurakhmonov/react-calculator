/* eslint-disable react/prop-types */

const Button = ({ className, value, onClick, theme }) => {

  console.log(className)

    return (
        <button
            style={
                theme === 'dark'
                    ? {
                          backgroundColor: 'hsl(30, 25%, 89%)',
                          color: 'hsl(221, 14%, 31%)',
                      }
                    : theme === 'light'
                    ? {
                          backgroundColor: 'hsl(45, 7%, 89%)',
                          color: 'hsl(60, 10%, 19%)',
                      }
                    : {
                          backgroundColor: 'hsl(268, 47%, 21%)',
                          color: 'hsl(52, 100%, 62%)',
                      }
            }
            className={className}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Button
