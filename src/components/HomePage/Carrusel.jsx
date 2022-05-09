import React from 'react'

const Carrusel = () => {
    var elem = document.getElementById('carrusel')
    var testimonials = [
        {
            id: 1,
            name: 'Cleibert Mora',
            text: 'method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements',
            img: 'http://localhost:8888/wordpress/smartmedic/wp-content/uploads/2019/12/DSC_0188.jpg',
            company: 'BPA Directores'
        },
        {
            id: 1,
            name: 'Cleibert Mora',
            text: 'method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements',
            img: 'http://localhost:8888/wordpress/smartmedic/wp-content/uploads/2019/12/DSC_0188.jpg',
            company: 'BPA Directores'
        },
        {
            id: 1,
            name: 'Cleibert Mora',
            text: 'method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements',
            img: 'http://localhost:8888/wordpress/smartmedic/wp-content/uploads/2019/12/DSC_0188.jpg',
            company: 'BPA Directores'
        },
        {
            id: 1,
            name: 'Cleibert Mora',
            text: 'method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements',
            img: 'http://localhost:8888/wordpress/smartmedic/wp-content/uploads/2019/12/DSC_0188.jpg',
            company: 'BPA Directores'
        },
        {
            id: 1,
            name: 'Cleibert Mora',
            text: 'method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements',
            img: 'http://localhost:8888/wordpress/smartmedic/wp-content/uploads/2019/12/DSC_0188.jpg',
            company: 'BPA Directores'
        },
        {
            id: 1,
            name: 'Cleibert Mora',
            text: 'method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements',
            img: 'http://localhost:8888/wordpress/smartmedic/wp-content/uploads/2019/12/DSC_0188.jpg',
            company: 'BPA Directores'
        },
        {
            id: 1,
            name: 'Cleibert Mora',
            text: 'method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements',
            img: 'http://localhost:8888/wordpress/smartmedic/wp-content/uploads/2019/12/DSC_0188.jpg',
            company: 'BPA Directores'
        },
        {
            id: 1,
            name: 'Cleibert Mora',
            text: 'method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements',
            img: 'http://localhost:8888/wordpress/smartmedic/wp-content/uploads/2019/12/DSC_0188.jpg',
            company: 'BPA Directores'
        },
        {
            id: 1,
            name: 'Cleibert Mora',
            text: 'method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements',
            img: 'http://localhost:8888/wordpress/smartmedic/wp-content/uploads/2019/12/DSC_0188.jpg',
            company: 'BPA Directores'
        },
        {
            id: 1,
            name: 'Cleibert Mora',
            text: 'method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements',
            img: 'http://localhost:8888/wordpress/smartmedic/wp-content/uploads/2019/12/DSC_0188.jpg',
            company: 'BPA Directores'
        },
    ]
    var right = document.getElementById('carrousel-right')

    var left = document.getElementById('carrousel-left')

    right.addEventListener('click', function () {
        elem.scrollLeft += 800
    })

    left.addEventListener('click', function () {
        elem.scrollLeft -= 800
    })
    return (
        <>
            <script>
            </script>

            <div class="relative">
                <div id="carrusel" class="flex flex-row overflow-x-auto mx-16">
                    {testimonials.map((el, i) => (
                        <div class="card flex flex-col items-center shadow-lg w-2/3 bg-white p-5 m-3 text-center">
                            <img src={el.img} class="rounded-full w-2/4 mb-6" />
                            <p>${el.text}</p>
                            <p class="font-bold mt-4">{el.name} - {el.company}</p>
                        </div>
                    ))}
                </div>

                <div id="carrousel-left" class="arrow absolute bg-blue-700 text-white p-3 p-3 shadow cursor-pointer hover:bg-blue-600"><span class="lnr lnr-chevron-left"></span></div>
                <div id="carrousel-right" class="arrow absolute right-0 bg-blue-700 text-white p-3 shadow cursor-pointer hover:bg-blue-600"><span class="lnr lnr-chevron-right"></span></div>

            </div>
        </>
    )
}

export default Carrusel