import React, { useState } from "react";

const Calculator = () => {
	const [input, setInput] = useState("");

	const handleClick = (value) => {
		setInput((prev) => prev + value);
	};

	const handleClear = () => {
		setInput("");
	};

	const handleEvaluate = () => {
		try {
			setInput(eval(input).toString());
		} catch {
			setInput("Error");
		}
	};

	const handlePercentage = () => {
		try {
			setInput((eval(input) / 100).toString());
		} catch {
			setInput("Error");
		}
	};
    const handleToggleSign = () => {
		if (input) {
			try {
				setInput((eval(input) * -1).toString());
			} catch {
				setInput("Error");
			}
		}
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="bg-white shadow-lg rounded-lg p-6 w-80">
				<div className="flex justify-end p-4 border-b border-gray-300">
					<input
						type="text"
						value={input}
						readOnly
						className="w-full text-right text-2xl font-bold border-none outline-none"
					/>
				</div>
				<div className="grid grid-cols-4 gap-2 mt-4">
					<button
						onClick={handleClear}
						className="bg-red-500 text-white p-4 rounded-lg hover:bg-red-600">
						C
					</button>
                    <button
						onClick={handleToggleSign}
						className="bg-gray-300 p-4 rounded-lg hover:bg-gray-400">
						±
					</button>
                    <button
						onClick={handlePercentage}
						className="bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600">
						%
					</button>
                    <button
						onClick={() => handleClick("+")}
						className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
						+
					</button>

					<button
						onClick={() => handleClick("7")}
						className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300">
						7
					</button>
					<button
						onClick={() => handleClick("8")}
						className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300">
						8
					</button>
					<button
						onClick={() => handleClick("9")}
						className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300">
						9
					</button>
                    <button
						onClick={() => handleClick("-")}
						className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
						-
					</button>
					

					<button
						onClick={() => handleClick("4")}
						className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300">
						4
					</button>
					<button
						onClick={() => handleClick("5")}
						className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300">
						5
					</button>
					<button
						onClick={() => handleClick("6")}
						className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300">
						6
					</button>
                    
					<button
						onClick={() => handleClick("*")}
						className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
						*
					</button>
                    <button
						onClick={() => handleClick("1")}
						className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300">
						1
					</button>
                    <button
						onClick={() => handleClick("2")}
						className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300">
						2
					</button>
                    <button
						onClick={() => handleClick("3")}
						className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300">
						3
					</button>
                    <button
						onClick={() => handleClick("/")}
						className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
						/
					</button>

				

					<button
						onClick={() => handleClick("0")}
						className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300 col-span-2">
						0
					</button>
					<button
						onClick={() => handleClick(".")}
						className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300">
						.
					</button>
					

					
					
					<button
						onClick={handleEvaluate}
						className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 ">
						=
					</button>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
