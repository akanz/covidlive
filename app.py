from flask import Flask, render_template, flash, redirect, url_for, session, logging,request
import requests, json
from datetime import date
from config.config import secret_key

app = Flask(__name__)

today = str(date.today())

@app.route('/')
def home():
    res = requests.get('https://api.covid19api.com/summary')

    if res.status_code == 200:
        summ = [res.json()]
        for j in summ:
            data = j['Global']
            new_data = data
        return render_template('index.html',new_data=new_data )
    return home()

@app.route('/result/', methods=['GET','POST'])
def result():
    resp = requests.get('https://api.covid19api.com/summary')
    if request.method == 'POST':
        name = request.form['text']
        name = name.lower()
        slug = name.replace(' ','-')

        #res1 = requests.get('https://api.covid19api.com/country/{}?from=2020-03-01T00:00:00Z&to={}T00:00:00Z'.format(slug,today))

        try:
            if resp.status_code == 200:
                summ = [resp.json()]
                #total = res1.json()
                for j in summ:
                    data = j['Countries']

                for i in data:
                    country = i['Slug']
                    country = country.replace('-',' ')
                    if country == name:
                        new_data = i
                    else:
                        continue
                    return render_template('result.html',new_data=new_data)
            else:
                app.logger.error('Error {} occurred'.format(str(resp.status_code)))
                flash('something went wrong, try again.', 'danger')
                return redirect(url_for('error'))
        except:
            app.logger.error('Invalid response')
            flash('Oops! There must be a connection error', 'warning')
            return redirect(url_for('home'))

    return result()

@app.route('/error')
def error():
    return redirect(url_for('home'))



if __name__ == '__main__':
    app.secret_key = secret_key
    app.run(debug=True)
