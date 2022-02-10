<script>
  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  async function submitData(){
    console.log(formData);
    const rawResponse = await fetch(
        "https://unots.herokuapp.com/api/signup",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const content = await rawResponse.json();
      console.log(content);
  }
</script>

<div class="bg-[#f7fafc] h-screen w-screen flex mx-auto items-center justify-center">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-0 main-card transition-all bg-white shadow-md">
        <div class="col-span-2 rounded-xl flex items-center justify-center mx-auto">
            <div class="w-full py-10">
                <h1 class="font-primary">Welcome friend!</h1>
                <p class="text-lg text-center text-gray-500 font-secondary">Please create your own account</p>
                <form on:submit|preventDefault={submitData} class="uk-margin">
                    <div class="mb-3 w-full font-primary">
                        <label for="lastName" class="form-label inline-block mb-2 text-gray-700 font-semibold"
                          >First Name</label
                        >
                        <input
                          type="text"
                          bind:value={formData.firstName}
                          required
                          class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-md
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border-big border-gray-300
                            rounded
                            transition
                            ease-in-out
                            font-primary
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none
                          "
                          placeholder="Ex: Didier"
                        />
                    </div>
                    <div class="mb-3 w-full font-primary">
                        <label for="lastName" class="form-label inline-block mb-2 text-gray-700 font-semibold"
                          >Last Name</label
                        >
                        <input
                          type="text"
                          required
                          bind:value={formData.lastName}
                          class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-md
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border-big border-gray-300
                            rounded
                            transition
                            ease-in-out
                            font-primary
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none
                          "
                          placeholder="Ex: Chummy"
                        />
                    </div>
                    <div class="mb-3 w-full font-primary">
                        <label for="email" class="form-label inline-block mb-2 text-gray-700 font-semibold"
                          >Email</label
                        >
                        <input
                          type="email"
                          required
                          bind:value={formData.email}
                          class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-md
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border-big border-gray-300
                            rounded
                            transition
                            ease-in-out
                            font-primary
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none
                          "
                          placeholder="Ex: username@name.domain"
                        />
                    </div>
                    <div class="mb-3 w-full font-primary">
                        <label for="email" class="form-label inline-block mb-2 text-gray-700 font-semibold"
                          >Password</label
                        >
                        <input
                          type="password"
                          required
                          bind:value={formData.password}
                          class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-md
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border-big border-gray-300
                            rounded
                            transition
                            ease-in-out
                            font-primary
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none
                          "
                          placeholder="********"
                        />
                    </div>
                    <div class="flex space-x-2 justify-center w-full mt-6">
                        <button type="submit" class="w-full font-primary inline-block px-6 py-2 bg-black text-white font-medium text-md leading-tight rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-300 ease-in-out">Sign up</button>
                    </div>

                    <div class="w-full px-3 py-4">
                            <p class="text-center">
                                <span class=" font-secondary font-semibold text-gray-500 text-md">Have account already?</span>
                                <span class="font-secondary font-bold  cursor-pointer text-black text-md">Sign in here</span>
                            </p>
                    </div>
                    
                </form>
            </div>
        </div>
        <div class="col-span-2 rounded-xl uk-inline h-full">
            <img src="https://th.bing.com/th/id/R.8e1efc22a3c2227909d92f6b03ce021b?rik=Zde8ZEGr%2flb97g&pid=ImgRaw&r=0" alt="" class="h-full w-full object-cover">
            <div class="uk-overlay uk-light uk-position-bottom text-center glass mx-4 my-6 md:mb-16">
                <div class="gap-2 flex flex-col">
                    <p class="text-sm font-primary text-white text-center font-semibold">"I like using notebook app, happy to be having all my alls set in place."</p>
                    <div class="flex flex-col w-max float-left font-secondary gap-2">
                        <p class="text-md font-bold text-white">Didier Chummy</p>
                        <p class="text-sm text-white font-semibold">Founder of GOP parks</p>
                        <p class="text-xs text-white">Unotiz User</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .main-card {
        height: 600px;
        width: 1200px;
        border-radius: 20px;
    }

    .border-big{
         border: 2px solid rgb(209 213 219 / var(--tw-border-opacity));;
    }
    img{
        height: 600px;
        width: 100%;
    }

    .glass{
        backdrop-filter: blur(0px) saturate(400%);
        -webkit-backdrop-filter: blur(6px) saturate(0%);
        background-color: rgba(255, 255, 255, 0.75);
        border-radius: 12px;
        border: 2px solid #fff;
    }
</style>