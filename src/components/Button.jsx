export const Button = ({children}) => {
  return (
    <div>
    <button className="w-64 text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg">
            {children}
      </button>
    </div>
  );
}


