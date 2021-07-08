import React from 'react'

export default function SearchMovies() {
	const searchMovies = async (event) => {
		event.preventDefault
		console.log('submitting')
	}

	return (
		<form className='form'>
			<label className='label' htmlFor='query'>
				Movie Name
			</label>
			<input
				className='input'
				type='text'
				name='query'
				placeholder='i.e. Jurassic Park'
			/>
			<button className='button' type='submit'>
				Search
			</button>
		</form>
	)
}
