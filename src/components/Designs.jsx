import React from 'react'

function Designs() {
    const designsData = [
        {
          title: 'design 1',
          image:'https://placehold.co/600x400',
          description: 'Description of design 1',
          link: 'https://example.com/design1',
        },
        {
          title: 'design 2',
          image:'https://placehold.co/600x400',
          description: 'Description of design 2',
          link: 'https://example.com/design2',
        },
        {
            title: 'design 1',
            image:'https://placehold.co/600x400',
            description: 'Description of design 1',
            link: 'https://example.com/design1',
          },
          {
            title: 'design 2',
            image:'https://placehold.co/600x400',
            description: 'Description of design 2',
            link: 'https://example.com/design2',
          },
        // Add more designs
      ];
  return (
    <div id='designs' className=''>

    <section className=" flex justify-center bg-dark pt-12">
          <div className=" ">
            <h2 className="text-4xl font-bold text-center text-white font-thin mb-8">Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center  ">
              {designsData.map((design, index) => (
                <div key={index} className=" shadow-md mx-5 my-5 transition-scale duration-150 ease-in-out hover:scale-110 transform-gpu transition-padding" style={{width:'500px',maxHeight:'500px',}}>
                  <a href={design.link} target="_blank"  rel="noopener noreferrer">
                    <img src={design.image} alt={design.title} className="rounded-lg " />
                  </a>
               
                </div>
              ))}
            </div>
          </div>
        </section>
        </div>
  )
}

export default Designs