import axios from 'axios';
import { useForm } from 'react-hook-form';

const CreateUser = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		const newUser = {
			username: data.username
		};

		axios
			.post('https://murmuring-reef-67194.herokuapp.com/users/add', newUser)
			.then((res) => console.log(res.data));
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				<input
					name="username"
					ref={register}
					placeholder="Username"
					className="mr-8 border-gray-400 bg-white focus:outline-none focus:bg-gray-200 border rounded-2xl py-2 px-3"
				/>

				<input
					type="submit"
					className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
				/>
			</form>
		</div>
	);
};

export default CreateUser;
