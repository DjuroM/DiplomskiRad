<?php

namespace App\Http\Controllers;

use App\Models\Pickups;
use Exception;
use Illuminate\Http\Request;

class PickupsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Pickups::all();
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

        $data = Pickups::create($request->all());

        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pickups  $pickups
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Pickups::findOrFail($id);
        return $data;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pickups  $pickups
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $pickups = Pickups::find($id);
        $pickups->update($request->all());
        return $pickups;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pickups  $pickups
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pickups = Pickups::findOrFail($id);
        $pickups->delete($id);
        return '{"success":"Uspjesno ste obrisali pickups."}';
    }
}
