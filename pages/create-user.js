import axios from 'axios';
import { useForm } from 'react-hook-form';

const CreateUser = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		const newUser = {
			username: data.username
		};

		axios.post('http://localhost:5000/users/add', newUser).then((res) => console.log(res.data));
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="username" ref={register} placeholder="Username" />

				<input type="submit" />
			</form>
		</div>
	);
};

export default CreateUser;
