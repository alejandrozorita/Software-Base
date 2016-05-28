<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\FileRequest;
use App\Repositorios\FileRepo;
use App\File;

class FileController extends Controller
{

    protected $fileRepo;

     /**
     *
     */
    public function __construct(FileRepo $fileRepo)
    { 
        $this->fileRepo = $fileRepo;
    }


    /**
     * Enseñamos los ficheros.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $datos_vista['ficheros'] = $this->fileRepo->buscar_usuario_enviado($request->user()->id);

        return view('files.index', compact('datos_vista'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('files.new');
    } 
    /**
     * Guardamos un nuevo fichero.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FileRequest $request)
    {
        $request->user()->files()->create([
            'user_id' => $request->user()->id, 
            'user_recibe' => 2,
            'asunto' => $request->asunto,
            'cuerpo' => $request->cuerpo,
            'tipo' => $request->tipo,
            'url' => route('ficheros.index'),
            ]);

        return redirect(route('ficheros.index'))->with('success', 'Fichero subido');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return 'show';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($file_id)
    {
        return view('files.edit',[
            'file' => File::find($file_id)
            ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$file_id)
    {

        $file = File::find($file_id);
        $this->authorize('owner',$file);
        $file->update($request->all());
        return redirect(route('ficheros.index'))->with('success', 'Fichero subido'); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($file)
    {
        $file = File::find($file);
        $this->authorize('owner',$file);
        $file->delete();
        return redirect(route('ficheros.index'))->with('success', 'Fichero borrado correctamente'); 
    }
}
