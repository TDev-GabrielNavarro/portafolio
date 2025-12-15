import React, { useState } from 'react';
import { Folder, FolderOpen, FileText, User, Code, Mail, X, Icon } from 'lucide-react';
import "../styles/animations.css";

export default function Portfolio() {
    const [isFolderOpen, setIsFolderOpen] = useState(false);
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [isOpening, setIsOpening] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isFolderReturning, setIsFolderReturning] = useState(false);

    const documents = [
        {
            id: 'about',
            title: 'About Me',
            icon: User,
            color: 'bg-blue-100 hover:bg-blue-200 border-blue-300',
            bgExpanded: 'bg-gradient-to-br from-blue-50 to-blue-100',
            content: (
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold text-gray-800'>Sobre Mí</h2>
                    <p className='text-gray-600 text-lg leading-relaxed'>
                        Soy estudiante de Ingeniería de Sistemas en 5to semestre, apasionado por el desarrollo web
                        y la tecnología. Estoy enfocado en convertirme en desarrollador Full Stack.
                    </p>
                    <p className='mt-6 p-4 bg-blue-50 rounded-lg'>
                        Me interesa especialmente el desarrollo frontend moderno, la ciberseguridad 
                        y crear experiencias de usuario innovadoras.
                    </p>
                    <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
                        <p className='text-gray-700 font-medium'>
                            Objetivo Actual:
                        </p>
                        <p className='text-gray-600'>
                            Lograr conseguir mi primera experiencia laboral en desarrollador como junior.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'skills',
            title: 'Skills',
            icon: Code,
            color: 'bg-green-100 hover:bg-green-200 border-green-300',
            bgExpanded: 'bg-gradient-to-br from-green-50 to-green-100',
            content: (
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold text-gray-800'>Habilidades</h2>
                    <div className='p-4 bg-white rounded-lg shadow-sm'>
                        <h3 className='font-semibold text-gray-800 text-lg mb-2'>Frontend</h3>
                        <div className='flex flex-wrap gap-2'>
                            {['JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'].map(skill => (
                                <span key={skill} className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium'>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='p-4 bg-white rounded-lg shadow-sm'>
                        <h3 className='font-semibold text-gray-800 text-lg mb-2'>Backend</h3>
                        <div className='flex flex-wrap gap-2'>
                            {['Node.js'].map(skill => (
                                <span key={skill} className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium'>
                                    {skill}
                                </span>
                            ))}
                        
                        </div>
                    </div>
                </div>
            )   
        },
        {
            id: 'projects',
            title: 'Proyectos',
            icon: FileText,
            color: 'bg-purple-100 hover:bg-purple-200 border-purple-300',
            bgExpanded: 'bg-gradient-to-br from-purple-50 to-purple-100',
            content: (
                <div className='space-y-6'>
                    <h2 className='text-3xl font-bold text-gray-800'>Mis Projectos</h2>
                    <div className='space-y-4'>
                        <div className='p-5 bg-white rounded-lg shadow-md border-l-4 border-purple-500'>
                            <h3 className='font-bold text-gray-800 text-xl'>Portafolio Interactivo</h3>
                            <p className='text-sm text-purple-600 mb-3'>React • Tailwind CSS • Lucide icons</p>
                            <p className='text-gray-600 leading-relaxed'>
                                Portafolio personal con concepto de carpeta interactiva y navegación única.
                                Implementa animaciones fluidas y diseño responsivo.
                            </p>
                            <div className='mt-4 flex gap-3'>
                                <a href='#' className='text-purple-600 hover:underline text-sm font-medium'>
                                    Ver Demo
                                </a>
                                <a href='https://github.com/TDev-GabrielNavarro/portafolio' className='text-purple-600 hover:underline text-sm font-medium'>
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div className='p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300'>
                            <p className='text-gray-500 text-center'>Más proyectos próximamente...</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'contact',
            title: 'Contactame',
            icon: Mail,
            color: 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300',
            bgExpanded: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
            content: (
                <div className='space-y-6'>
                    <h2 className='text-3xl font-bold text-gray-800'>Contacto</h2>
                    <p className='text-gray-600 text-lg'>
                        Si te intereso mi portafolio y deseas contactarme, dejo mi correo:
                    </p>
                    <div className='space-y-4'>
                        <div className='p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                            <h3 className='font-semibold text-gray-700 mb-1'>Email</h3>
                            <a href="gnavarrodealba@gmail.com" className='text-yellow-600 hover:text-yellow-800'>
                                gnavarrodealba@gmail.com
                            </a>
                        </div>
                        <div className='p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                            <h3 className='font-semibold text-gray-700 mb-1'>GitHub</h3>
                            <a href="https://github.com/TDev-GabrielNavarro" target='blank' rel="noopener noreferrer" className='text-yellow-600 hover:text-yellow-800'>github.com/TDev-GabrielNavarro</a>
                        </div>
                        <div className='p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                            <h3 className='font-semibold text-gray-700 mb-1'>LinkedIn</h3>
                            <a href="#" target='blank' rel="noopener noreferrer" className='text-yellow-600 hover:text-yellow-800'>linkedin.com/in/#</a>
                        </div>
                    </div>
                </div>
            )
        },
    ];

    const handleFolderClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsFolderOpen(true);
      setIsOpening(false);
    }, 500);
  };

  const handleDocClick = (docId) => {
    setSelectedDoc(docId);
  };

  const handleCloseDoc = () => {
    setSelectedDoc(null);
  };

  const handleCloseFolderView = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsFolderReturning(true);
    }, 600);
    setTimeout(() => {
      setIsFolderOpen(false);
      setIsFolderReturning(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {!isFolderOpen && !isOpening && !selectedDoc && (
        <div className="min-h-screen flex items-center justify-center">
          <button
            onClick={handleFolderClick}
            className="group transform transition-all duration-500 hover:scale-110 focus:outline-none"
          >
            <div className="relative">
              <Folder 
                size={140} 
                className="text-yellow-500 drop-shadow-lg group-hover:text-yellow-600 transition-colors" 
                strokeWidth={1.5} 
              />
              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-full" />
            </div>
            <p className="mt-6 text-gray-700 text-center font-semibold text-xl tracking-wide">
              Mi Portafolio
            </p>
            <p className="text-gray-500 text-sm mt-2">Click para abrir</p>
          </button>
        </div>
      )}

      {isOpening && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-folderOpeningSequence">
            <div className="relative">
              <Folder 
                size={140} 
                className="text-yellow-500 drop-shadow-lg absolute top-0 left-0 animate-iconFadeOut" 
                strokeWidth={1.5} 
              />
              <FolderOpen 
                size={140} 
                className="text-yellow-500 drop-shadow-lg animate-iconFadeIn" 
                strokeWidth={1.5} 
              />
            </div>
            <p className="mt-6 text-gray-700 text-center font-semibold text-xl tracking-wide">
              Mi Portafolio
            </p>
            <p className="text-gray-500 text-sm mt-2 animate-pulse">Abriendo...</p>
          </div>
        </div>
      )}

      {isFolderReturning && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-folderReturningSequence">
            <div className="relative">
              <FolderOpen 
                size={140} 
                className="text-yellow-500 drop-shadow-lg absolute top-0 left-0 animate-iconFadeOut" 
                strokeWidth={1.5} 
              />
              <Folder 
                size={140} 
                className="text-yellow-500 drop-shadow-lg animate-iconFadeIn" 
                strokeWidth={1.5} 
              />
            </div>
            <p className="mt-6 text-gray-700 text-center font-semibold text-xl tracking-wide opacity-50">
              Mi Portafolio
            </p>
          </div>
        </div>
      )}

      {isFolderOpen && !selectedDoc && !isFolderReturning && (
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="flex items-center gap-12 max-w-6xl w-full">
            <div className="flex-shrink-0">
              <button
                onClick={handleCloseFolderView}
                className="group relative"
                disabled={isClosing}
              >
                <FolderOpen 
                  size={120} 
                  className={`drop-shadow-lg transition-all duration-500 ${
                    isClosing ? 'text-yellow-500 opacity-70' : 'text-yellow-500 group-hover:text-yellow-600'
                  }`}
                  strokeWidth={1.5} 
                />
                <p className="mt-4 text-gray-700 text-center font-medium">
                  {isClosing ? 'Cerrando...' : 'Mi Portafolio'}
                </p>
                {!isClosing && (
                  <p className="text-gray-400 text-xs mt-1">Click para cerrar</p>
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 flex-1">
              {documents.map((doc, index) => {
                const Icon = doc.icon;
                const closeDelay = (documents.length - 1 - index) * 0.1;
                
                return (
                  <button
                    key={doc.id}
                    onClick={() => !isClosing && handleDocClick(doc.id)}
                    disabled={isClosing}
                    className={`${doc.color} border-2 p-8 rounded-xl shadow-lg transition-all duration-300 transform ${
                      !isClosing && 'hover:scale-105 hover:shadow-xl hover:-translate-y-1'
                    }`}
                    style={{
                      animation: isClosing 
                        ? `slideOut 0.5s ease-in ${closeDelay}s both`
                        : `slideIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + index * 0.15}s both`,
                      pointerEvents: isClosing ? 'none' : 'auto'
                    }}
                  >
                    <icon 
                      size={56} 
                      className="text-gray-700 mb-4 mx-auto transition-transform duration-300" 
                      strokeWidth={1.5} 
                    />
                    <p className="text-lg font-semibold text-gray-800">{doc.title}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {selectedDoc && (
        <div className="min-h-screen flex items-center justify-center p-8 animate-fadeIn">
          <div className="w-full max-w-4xl">
            <button
              onClick={handleCloseDoc}
              className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              <span className="font-medium">Cerrar</span>
            </button>
            
            <div 
              className={`${documents.find(doc => doc.id === selectedDoc)?.bgExpanded} rounded-2xl shadow-2xl p-10 animate-scaleIn`}
            >
              {documents.find(doc => doc.id === selectedDoc)?.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}