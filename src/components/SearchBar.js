import React, { useState } from 'react'

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('')

    const onInputChange = e => {
        setTerm(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()

        onFormSubmit(term)
    }

    return (
        <div className="search-bar ui segment" style={{marginTop: '10px'}}>
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search for a Video</label>
                    <input 
                        type="text" 
                        onChange={onInputChange}
                        value={term} 
                        />
                </div>
            </form>
        </div>
    )
}


export default SearchBar