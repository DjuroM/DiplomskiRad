<?php

namespace App\Http\Controllers;

use App\Models\Guitar;
use Illuminate\Http\Request;

class GuitarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Guitar::with('guitarType', 'pickups', 'brand')->get();

        return $data;
    }

    public function index1($id)
    {
        $data = Guitar::with('guitarType', 'pickups', 'brand')->where('guitar_type_id', $id)->get();

        return $data;
    }

    public function index2($id)
    {
        $data = Guitar::with('guitarType', 'pickups', 'brand')->where('brand_id', $id)->get();

        return $data;
    }
    public function index3($brandId, $guitarTypeId)
    {
        $data = Guitar::with('guitarType', 'pickups', 'brand')->where('brand_id', $brandId)->where('guitar_type_id', $guitarTypeId)->get();

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
        $data = Guitar::create($request->all());
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Guitar  $guitar
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Guitar::with('guitarType', 'pickups', 'brand')->find($id);
        return $data;
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Guitar  $guitar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $guitar = Guitar::find($id);
        $guitar->update($request->all());
        return $guitar;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Guitar  $guitar
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $guitar = Guitar::findOrFail($id);
        $guitar->delete($id);
        return '{"success":"Uspjesno ste gitaru."}';
    }
}
