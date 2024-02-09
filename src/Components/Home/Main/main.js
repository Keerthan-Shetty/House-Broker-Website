import React from 'react'
import "./main.css"

const Main = () => {
  return (
        <section className='main d-flex justify-content-center align-items-center'>
            <div className='container'>
                <div className='heading text-center'>
                    <h1>Search Your Next Home</h1>
                    <p>Find new & featured property located in your local city.</p>
                </div>
                <br />
                <form>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <label htmlFor='city'>City/Town</label><br/>
                            <input type='text' id='city' placeholder='Location' />
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <label htmlFor='type'>Property Type</label><br/>
                            <input type='text' id='type' placeholder='Property Type' />
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <label htmlFor='range'>Price Range</label><br/>
                            <input type='text' id='range' placeholder='Price Range' />
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='filter'>
                                <button className='add-filter'><i class="fa-solid fa-circle-plus"></i> Add filter</button>
                                <button className='search'><i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default Main
