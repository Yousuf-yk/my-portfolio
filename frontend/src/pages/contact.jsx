import React from 'react';

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('number'),
      message: formData.get('text'),
    };

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);
      e.target.reset();
    } catch (error) {
      alert('Unable to send message right now. Please try again later.');
    }
  };

  return (
    <section id='contact' className='mx-auto max-w-6xl px-6 py-24'>
      <div className='mb-14 text-center'>
        <p className='mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-600'>
          Contact
        </p>

        <h2 className='text-4xl font-bold text-gray-900 md:text-5xl'>
          Let's work together
        </h2>

        <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600'>
          Have an idea, project, or opportunity? I'd love to hear from you.
        </p>
      </div>

      <div className='grid gap-10 lg:grid-cols-[340px_1fr]'>
        {/* Contact info */}
        <div className='rounded-3xl border border-gray-200 bg-white p-8 shadow-sm'>
          <h3 className='mb-8 text-2xl font-semibold text-gray-900'>
            Contact information
          </h3>

          <div className='space-y-6'>
            <div>
              <p className='text-sm font-medium text-gray-500'>Email</p>
              <a
                href='mailto:yk0574292@gmail.com'
                className='mt-1 block text-gray-900 hover:text-emerald-600'
              >
                yk0574292@gmail.com
              </a>
            </div>

            <div>
              <p className='text-sm font-medium text-gray-500'>Phone</p>
              <p className='mt-1 text-gray-900'>+91 **********</p>
            </div>

            <div>
              <p className='text-sm font-medium text-gray-500'>Location</p>
              <p className='mt-1 text-gray-900'>Bangalore, India</p>
            </div>

            <div>
              <p className='text-sm font-medium text-gray-500'>Availability</p>
              <div className='mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700'>
                <span className='h-2 w-2 rounded-full bg-emerald-500'></span>
                Open for internships & freelance work
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className='rounded-3xl border border-gray-200 bg-white p-8 shadow-sm'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid gap-6 md:grid-cols-2'>
              <div>
                <label className='mb-2 block text-sm font-medium text-gray-700'>
                  Your name
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='John Doe'
                  required
                  className='w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100'
                />
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium text-gray-700'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='john@example.com'
                  required
                  className='w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100'
                />
              </div>
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Phone number
              </label>
              <input
                type='tel'
                name='number'
                placeholder='+91 98765 43210'
                className='w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100'
              />
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Project details
              </label>
              <textarea
                name='text'
                placeholder='Tell me about your project, timeline, and requirements...'
                required
                rows={6}
                className='w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100'
              />
            </div>

            <button
              type='submit'
              className='inline-flex items-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700'
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;