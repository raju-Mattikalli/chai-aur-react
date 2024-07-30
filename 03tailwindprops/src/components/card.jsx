import React from 'react'

function Card({username}) {
    console.log("props" , username)
  return (
   

<>

    
<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/14813427/pexels-photo-14813427.jpeg" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
       <h4>{username || "Missed"}</h4>
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>



<section>
  <div class="mx-auto max-w-7xl px-2 lg:px-0">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
        People who made it successful
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
        reiciendis a vel error explicabo voluptatum nihil possimus veritatis eos
        culpa.
      </p>
    </div>
    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
      <div>
        <img
          class="h-[300px] w-full rounded-md object-cover"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-[300px] w-full rounded-md object-cover"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-[300px] w-full rounded-md object-cover"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
          alt=""
        />
      </div>
    </div>
    <div class="mt-8 text-center md:mt-16">
      <button
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Join Our Team
      </button>
    </div>
  </div>
</section>


</>



  )
}

export default Card