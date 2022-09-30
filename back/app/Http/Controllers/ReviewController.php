<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Review::with('user', 'guitar')->get();
        return $data;
    }

    public function index2($id)
    {
        $data = Review::with('user', 'guitar')->where('guitar_id', $id)->get();
        return $data;
    }
    public function index3($id)
    {
        $data = Review::with('user', 'guitar')->where('user_id', $id)->get();
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
        $data = Review::create($request->all());
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Review::with('user', 'guitar')->find($id);
        return $data;
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $order =  Review::findOrFail($id);
        $order->update($request->all());
        return $order;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order =  Review::findOrFail($id);
        $order->delete($id);
        return '{"success":"Uspjesno ste review."}';
    }
}
