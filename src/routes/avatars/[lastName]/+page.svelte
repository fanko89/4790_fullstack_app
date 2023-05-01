<script>
    export let data
 </script>
 
 <main class="bg-gray-50 h-full flex items-center justify-center">
     <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-6">
         <h2 class="text-3xl font-bold text-center">{data.firstName} {data.lastName}</h2>
         <img src="{data.avatar}" alt="person avatar" class="mx-auto rounded-full w-32 h-32"/>
         <ul class="space-y-2">
             <li class="flex flex-col space-y-1">
                 <span class="text-gray-600 font-bold">Title:</span>
                 <span>{data.title}</span>
             </li>
             <li class="flex flex-col space-y-1">
                 <span class="text-gray-600 font-bold">Phone:</span>
                 <span>{data.phone}</span>
             </li>
             <li class="flex flex-col space-y-1">
                 <span class="text-gray-600 font-bold">Email:</span>
                 <span>{data.email}</span>
             </li>
             <li class="flex flex-col space-y-1">
                 <span class="text-gray-600 font-bold">Address:</span>
                 <span>{data.address}</span>
             </li>
             <li class="flex flex-col space-y-1">
                 <span class="text-gray-600 font-bold">End of information</span>
             </li>
         </ul>
     </div>
 </main>
 
 <style>
     img {
         width: 15rem;
         height: 15rem;
     }
 </style>