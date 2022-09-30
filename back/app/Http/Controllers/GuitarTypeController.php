<?php

namespace App\Http\Controllers;

use App\Models\GuitarType;
use Exception;
use Illuminate\Http\Request;

class GuitarTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = GuitarType::all();
        return $data;
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $data = GuitarType::create($request->all());
        } catch (Exception $e) {
            return '{"error" : "Taj tip vec postoji"}';
        }
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GuitarType  $guitarType
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = GuitarType::findOrFail($id);
        return $data;
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GuitarType  $guitarType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $guitarType = GuitarType::find($id);
        $guitarType->update($request->all());
        return $guitarType;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GuitarType  $guitarType
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $guitarType = GuitarType::findOrFail($id);
        $guitarType->delete($id);
        return '{"success":"Uspjesno ste obrisali tip gitare."}';
    }
}
