from flask import request, Flask, render_template, send_file, make_response, redirect, session, url_for
import os
import wordgen
app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
def download(fpath):
    fpath = os.path.join(app.root_path, fpath)
    return send_file(fpath, as_attachment=True, download_name="Sluzhebka.docx", mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document", max_age=600)

@app.post('/club6')
def club6():
  try:
    res = download(wordgen.gen_sluzhebka(request.form['group'], request.form['genitive_name'], request.form['event_name'], request.form['date'], request.form['start_time'], request.form['end_time'], request.form['num_people'], request.form['name']))
  except:
    res = redirect(url_for("form"))
  res.set_cookie('group', request.form['group'])
  res.set_cookie('genitive_name', request.form['genitive_name'])
  res.set_cookie('date', request.form['date'])
  res.set_cookie('name', request.form['name'])
  session['num_people'] = request.form['num_people']
  session['event_name'] = request.form['event_name']
  session['start_time'] = request.form['start_time']
  session['end_time'] = request.form['end_time']
  session['error'] = True
  return res
  

@app.route('/club6')
def form():
    return render_template('club6.html', 
                           error = session.pop('error', False),
                           group=request.cookies.get('group'), 
                           genitive_name=request.cookies.get('genitive_name'), 
                           event_name=request.cookies.get('event_name'), 
                           date=session.get('date', None),
                           start_time=session.get('start_time', None),
                           end_time=session.get('end_time', None),
                           num_people=session.get('num_people', None),
                           name=request.cookies.get('name'))
    
@app.route('/')
def home():
    return render_template('index.html')

@app.post('/') 
def home_post():
    match request.form["location"]:
      case "club":
        return redirect(url_for("club6"))
      case "conference":
        return redirect('/conference')
      case _:
        return redirect('/')