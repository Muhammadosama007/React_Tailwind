import React from 'react'

function MoveToTop() {
    return (
        <>

            <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="!fixed bottom-5 end-5 hidden rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
                id="btn-back-to-top">
                <span className="[&>svg]:w-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </span>
            </button>


            {/* <div
  className="container mx-auto mt-4 text-center dark:text-white"
  style="height: 2000px">
  <p class="mb-4">
    Start scrolling the page and a strong
    <strong>"Back to top" button </strong> will appear in the
    <strong>bottom right corner</strong> of the screen.
  </p>
  <p>Click this button and you will be taken to the top of the page.</p>
</div> */}
        </>
    )
}

export default MoveToTop