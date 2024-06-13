import { Fragment, useEffect, useState } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import ProfileBuilder from '../Header/ProfileBuilder';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MobileMenu({ items }) {
  console.log(items.length)
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors lg:hidden dark:border-neutral-700 dark:text-black"
      >
       <Bars3Icon className="h-6 w-6" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <TransitionChild
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          </TransitionChild>
          <TransitionChild
           as={Fragment}
           enter="transition-all ease-in-out duration-300"
           enterFrom="translate-x-[-100%]"
           enterTo="translate-x-0"
           leave="transition-all ease-in-out duration-200"
           leaveFrom="translate-x-0"
           leaveTo="translate-x-[-100%]"
          >
            <DialogPanel className="fixed top-0 bottom-0 left-0 w-80 flex h-full flex-col  pb-6 bg-[#13446B]">
              <div className="p-4">
                <button
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-black text-black transition-colors dark:border-slate-950 dark:text-white"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>
                <div className="h-12 items-center border-b">
                  <Link to="/" className="flex items-center justify-center" onClick={closeMobileMenu}>
                    <p className="text-2xl mb-1 font-extrabold text-[#E44D15]">
                      Edu<span className="text-[#f7f2f2] font-extrabold">Linker</span>
                    </p>
                  </Link>
                </div>
                {items.length ? (
                  <ul className="flex w-full flex-col my-4">
                    {items.map((item, index) => (
                      <li
                        className="mt-4 text-sm text-black transition-colors hover:text-neutral-500 dark:text-white"
                        key={index}
                      >
                        <Link 
                          to={item.href}
                          onClick={closeMobileMenu}
                          className={classNames(
                            "group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-sm font-medium",
                            location.pathname === item.href
                            ? "text-white" 
                            : 'text-gray-400 hover:text-gray-300',
              
                          )}
                         >
                          <item.icon
                            className={classNames(
                              location.pathname === item.href 
                              ? "text-white"  
                              : 'text-gray-400 hover:text-gray-300',
                              'mr-3 h-5 w-5'
                            )}
                            aria-hidden="true"
                          />
                            <span>{item.name}</span>
                          </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}
