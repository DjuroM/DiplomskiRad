<?php

namespace App\Http\Controllers;

use App\Models\Basket;
use Illuminate\Http\Request;

class BasketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Basket::with('user', 'guitar')->get();
        return $data;
    }

    public function index1($id)
    {
        $data = Basket::with('user', 'guitar')->where('user_id', $id)->get();
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
        $data = Basket::create($request->all());
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Basket  $basket
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Basket::with('user', 'guitar')->find($id);
        return $data;
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Basket  $basket
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $basket = Basket::findOrFail($id);
        $basket->update($request->all());
        return $basket;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Basket  $basket
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $basket = Basket::findOrFail($id);
        $basket->delete($id);
        return '{"success":"Uspjesno ste obrisali basket."}';
    }
}
