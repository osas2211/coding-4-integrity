import React from "react"

const SelectCoursePage = () => {
  return (
    <div className="min-h-screen bg-white p-4! md:p-20!">
      <div className="">
        <h2 className="uppercase text-3xl text-center pt-10!">select course</h2>
        <div className="grid grid-cols-3 gap-20 mt-16!">
          <div className="h-[70vh] w-full bg-black">
            <img
              src="/featured-work/work-1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectCoursePage
